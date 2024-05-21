
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

@Component({
  selector: 'app-footer-chart',
  templateUrl: './footer-chart.component.html',
  styleUrls: ['./footer-chart.component.scss']
})
export class FooterChartComponent implements OnInit, OnDestroy {
  private root!: am5.Root;

  ngOnInit(): void {
    // Create root element
    this.root = am5.Root.new("chartdiv1");

    // Set themes
    this.root.setThemes([
      am5themes_Animated.new(this.root)
    ]);

    // Create chart
    let chart = this.root.container.children.push(
      am5xy.XYChart.new(this.root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: this.root.verticalLayout,
        pinchZoomX: true,
        paddingLeft: 0
      })
    );

    // Add cursor
    let cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(this.root, {
        behavior: "none"
      })
    );
    cursor.lineY.set("visible", false);

    let colorSet = am5.ColorSet.new(this.root, {});

    // The data
    let data = [
      { date: "2021-12-31 18:00", value: 0 },
      { date: "2021-12-31 19:00", value: 0 },
      { date: "2021-12-31 20:00", value: 0 },
      { date: "2021-12-31 21:00", value: 0.3 },
      { date: "2021-12-31 22:00", value: 0.8 },
      { date: "2021-12-31 23:00", value: 1.2 },
      { date: "2022-01-01 00:00", value: 2.2 },
      { date: "2022-01-01 01:00", value: 2.5 },
      { date: "2022-01-01 02:00", value: 2.2 }
    ];

    // Create axes
    let xRenderer = am5xy.AxisRendererX.new(this.root, {
      minorGridEnabled: true,
      minGridDistance: 70
    });
    xRenderer.grid.template.set("location", 0.5);
    xRenderer.labels.template.setAll({
      location: 0.5,
      multiLocation: 0.5
    });

    let xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(this.root, {
        baseInterval: { timeUnit: "hour", count: 1 },
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(this.root, {})
      })
    );

    let yRenderer = am5xy.AxisRendererY.new(this.root, {});
    yRenderer.grid.template.set("forceHidden", true);
    yRenderer.labels.template.set("minPosition", 0.05);

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(this.root, {
        maxPrecision: 0,
        extraMin: 0.1,
        renderer: yRenderer
      })
    );

    let series = chart.series.push(
      am5xy.LineSeries.new(this.root, {
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        maskBullets: false,
        tooltip: am5.Tooltip.new(this.root, {
          pointerOrientation: "vertical",
          dy: -20,
          labelText: "{valueY}"
        })
      })
    );

    // Set up data processor to parse string dates
    series.data.processor = am5.DataProcessor.new(this.root, {
      dateFormat: "yyyy-MM-dd HH:mm",
      dateFields: ["date"]
    });

    series.strokes.template.setAll({ strokeDasharray: [3, 3], strokeWidth: 2 });

    let i = -1;
    series.bullets.push(() => {
      i++;
      if (i > 7) i = 0;

      let container = am5.Container.new(this.root, {
        centerX: am5.p50,
        centerY: am5.p50
      });

      container.children.push(
        am5.Circle.new(this.root, { radius: 20, fill: series.get("fill") })
      );

      container.children.push(
        am5.Picture.new(this.root, {
          centerX: am5.p50,
          centerY: am5.p50,
          width: 23,
          height: 23,
          src: "https://amcharts.com/wp-content/uploads/assets/timeline/timeline" + i + ".svg"
        })
      );

      return am5.Bullet.new(this.root, {
        sprite: container
      });
    });

    series.data.setAll(data);
    series.appear(1000);

    // Make stuff animate on load
    chart.appear(1000, 100);
  }

  ngOnDestroy(): void {
    // Dispose of chart instance
    if (this.root) {
      this.root.dispose();
    }
  }
}
