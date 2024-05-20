
import { Component, OnInit, OnDestroy, NgZone, Input, AfterViewInit } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

@Component({
  selector: 'app-expand-viewchart',
  templateUrl: './expand-viewchart.component.html',
  styleUrls: ['./expand-viewchart.component.scss']
})
export class ExpandViewchartComponent implements OnInit, OnDestroy ,AfterViewInit{
  @Input() data: any ={};
  private root!: am5.Root;

  constructor(private zone: NgZone) {}


  ngOnInit(): void {
  
  }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      let root = am5.Root.new('expand'+this.data?.title);

      root.setThemes([
        am5themes_Animated.new(root)
      ]);

      let chart = root.container.children.push(am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
        paddingLeft: 0
      }));

      let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
        behavior: "none"
      }));
      cursor.lineY.set("visible", false);

      let date = new Date();
      date.setHours(0, 0, 0, 0);
      let value = 100;

      function generateData() {
        value = Math.round((Math.random() * 10 - 5) + value);
        am5.time.add(date, "day", 1);
        return {
          date: date.getTime(),
          value: value
        };
      }

      function generateDatas(count: number) {
        let data = [];
        for (let i = 0; i < count; ++i) {
          data.push(generateData());
        }
        return data;
      }

      let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
        maxDeviation: 0.2,
        baseInterval: {
          timeUnit: "day",
          count: 1
        },
        renderer: am5xy.AxisRendererX.new(root, {
          minorGridEnabled: true
        }),
        tooltip: am5.Tooltip.new(root, {})
      }));

      let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          pan: "zoom"
        })
      }));

      let series = chart.series.push(am5xy.LineSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}"
        })
      }));

      // chart.set("scrollbarX", am5.Scrollbar.new(root, {
      //   orientation: "horizontal"
      // }));

      let data = generateDatas(100);
      series.data.setAll(data);

      series.appear(1000);
      chart.appear(1000, 100);

      this.root = root;
    });
  }

  

  ngOnDestroy(): void {
    this.zone.runOutsideAngular(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }
}
