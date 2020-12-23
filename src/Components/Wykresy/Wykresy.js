import React, { Component } from "react";
import {
  Container,
  DateText,
  DateContainer,
  DatesContainer,
  GenerujWykres,
  Calendar,
} from "./WykresyStyle";
import $ from "jquery";
import DatePicker from "react-datepicker";
import { Bar, Line, Pie } from "react-chartjs-2";
import "react-datepicker/dist/react-datepicker.css";
import CalendarImg from "../../Assets/calendar-alt.svg";

class Wykresy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date("2020-05-12").toISOString().replace(/T/g, "-"),
      endDate: new Date("2020-05-16").toISOString().replace(/T/g, "-"),
      filteredArrayDaty: [],
      filteredArrayPomiary: [],
      datyPomiaru: [],
      filteredArray: [],
      chartData: {
        // Labels should be Date objects
        labels: [],
        datasets: [
          {
            fill: false,
            label: "Hałas [db]",
            data: [],
            borderColor: "#3F51B5",
            backgroundColor: "#3F51B5",
            lineTension: 0.5,
          },
        ],
      },
    };
    this.updateStates = this.updateStates.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.przygotujDane = this.przygotujDane.bind(this);
  }
  componentDidMount() {
    $.ajax({
      type: "GET" /*Informacja o tym, że dane będą pobierane*/,
      url:
        "http://localhost/phpsandbox/pobierz.php" /*Informacja, o tym jaki plik będzie przy tym wykorzystywany*/,
      contentType:
        "application/json; charset=utf-8" /*Informacja o formacie transferu danych*/,
      dataType: "json" /*Informacja o formacie transferu danych*/,

      /*Działania wykonywane w przypadku sukcesu*/
      success: (json) => {
        /*Funkcja zawiera parametr*/
        let data2 = [];
        let data1 = [];
        let data3 = [];
        var data4 = [];
        /*Pętla typu for...in języka Javascript na danych w formacie JSON*/
        for (var klucz in json) {
          var wiersz =
            json[klucz]; /*Kolejne przebiegi pętli wstawiają nowy klucz*/
          var czas = wiersz[0];

          var pomiar = wiersz[1];

          /*Ustalenie sposobu wyświetlania pobranych danych w bloku div*/
          //console.log(id, id1);
          if (czas.indexOf("-00-") < 0 && klucz % 60 === 0) {
            data2[klucz] = pomiar;
            data1[klucz] = czas;
            //console.log("klucz="+klucz);
            data3.push(czas, pomiar);
            data4.push(data3);

            data3 = [];
          }

          // console.log(data4);
        }
        this.updateStates(data4);

        //console.log(data3);

        /*Dezaktywacja na określony czas przycisku wysyłającego - ten krok można pomninąć*/
        $("#pobierz").attr("disabled", true);
        setTimeout(function () {
          $("#pobierz").attr("disabled", false);
        }, 10000);
      },

      /*Działania wykonywane w przypadku błędu*/
      error: function (blad) {
        alert("Wystąpił błąd");
        console.log(
          blad
        ); /*Funkcja wyświetlająca informacje 
            o ewentualnym błędzie w konsoli przeglądarki*/
      },
    });
  }

  updateStates(data4) {
    this.setState({ datyPomiaru: data4 }, () => {
      $(".submit-wykres").css("pointer-events", "auto");
      $(".submit-wykres").css("background-color", "#3f51b5");
    });
  }
  handleChange(date) {
    console.log(date);

    this.setState(
      {
        startDate: new Date(date.getTime() - date.getTimezoneOffset() * 60000)
          .toISOString()
          .replace(/T/g, "-"),
      },
      () => {
        console.log(this.state.startDate);
      }
    );
  }
  handleChange2(date) {
    this.setState({
      endDate: new Date(date.getTime() - date.getTimezoneOffset() * 60000)
        .toISOString()
        .replace(/T/g, "-"),
    });
  }
  przygotujDane() {
    if (
      new Date(this.state.endDate.substring(0, 10)) <
      new Date(this.state.startDate.substring(0, 10))
    ) {
      $(".submit-wykres").css("border", "2px solid red");
      $(".submit-wykres").css("background-color", "#3f51b5");
    } else {
      $(".submit-wykres").css("border", "none");

      $(".submit-wykres").css("background-color", "#3f51b5");
    }

    let chartData = this.state.chartData;
    let filteredArrayDaty = [];
    let filteredArrayPomiary = [];
    this.state.datyPomiaru.forEach((item) => {
      if (
        new Date(item[0]) <= new Date(this.state.endDate.substring(0, 10)) &&
        new Date(item[0]) >= new Date(this.state.startDate.substring(0, 10))
      ) {
        item[0] = new Date(item[0]);
        // console.log(item[0]);
        item[1] = parseInt(item[1], 10);

        filteredArrayDaty.push(item[0]);
        filteredArrayPomiary.push(item[1]);
      } else {
        console.log(item[0]);
        console.log(this.state.endDate);
        console.log(this.state.startDate);
      }
    });
    chartData.labels = filteredArrayDaty;
    chartData.datasets[0].data = filteredArrayPomiary;
    this.setState({ chartData: chartData });
  }

  render() {
    return (
      <Container>
        <DatesContainer>
          <DateContainer>
            <DateText>Data rozpoczęcia</DateText>
            <DatePicker
              onChange={this.handleChange}
              selected={this.startDate}
              value={this.state.startDate.substring(0, 10)}
            />
            <Calendar src={CalendarImg} />
          </DateContainer>
          <DateContainer>
            <DateText>Data zakończenia</DateText>
            <DatePicker
              onChange={this.handleChange2}
              selected={this.endDate}
              value={this.state.endDate.substring(0, 10)}
            />
            <Calendar src={CalendarImg} />
          </DateContainer>
        </DatesContainer>
        <GenerujWykres onClick={this.przygotujDane} className="submit-wykres">
          Pokaż wykresy
        </GenerujWykres>
        <Line
          className="wykres"
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Largest Cities In " + this.props.location,
              fontSize: 25,
            },
            showLines: true,
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
            scales: {
              xAxes: [
                {
                  type: "time",
                },
              ],
            },
          }}
        />
      </Container>
    );
  }
}
export default Wykresy;
