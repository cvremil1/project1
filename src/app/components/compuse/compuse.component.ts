
  import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5radar from "@amcharts/amcharts5/radar";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

@Component({
  selector: 'app-compuse',
  templateUrl: './compuse.component.html',
  styleUrls: ['./compuse.component.scss']
})
export class CompuseComponent implements OnInit, AfterViewInit, OnDestroy {
  private root!: am5.Root;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  ngOnDestroy(): void {
    if (this.root) {
      this.root.dispose();
    }
  }

  private createChart(): void {
    // Create root element
    this.root = am5.Root.new("chartdiv");

    // Set themes
    this.root.setThemes([
      am5themes_Animated.new(this.root)
    ]);

    // Create chart
    let chart = this.root.container.children.push(
      am5radar.RadarChart.new(this.root, {
        panX: false,
        panY: false,
        startAngle: -90,
        endAngle: 270
      })
    );

    // Create axis and its renderer
    let axisRenderer = am5radar.AxisRendererCircular.new(this.root, {
      strokeOpacity: 1,
      strokeWidth: 5,
      minGridDistance: 10
    });
    axisRenderer.ticks.template.setAll({
      forceHidden: true
    });
    axisRenderer.grid.template.setAll({
      forceHidden: true
    });
    axisRenderer.labels.template.setAll({ forceHidden: true });

    let xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(this.root, {
        maxDeviation: 0,
        min: 0,
        max: 360,
        strictMinMax: true,
        renderer: axisRenderer
      })
    );

    // Add clock hand - north
    let axisDataItemN = xAxis.makeDataItem({ value: 0 });
    let clockHandN = am5radar.ClockHand.new(this.root, {
      pinRadius: 0,
      radius: am5.percent(90),
      bottomWidth: 40
    });
    clockHandN.hand.set("fill", am5.color(0xff0000));
    clockHandN.adapters.add("rotation", function () {
      return -90;
    });
    axisDataItemN.set("bullet", am5xy.AxisBullet.new(this.root, { sprite: clockHandN }));
    xAxis.createAxisRange(axisDataItemN);

    // Add clock hand - south
    let axisDataItemS = xAxis.makeDataItem({ value: 180 });
    let clockHandS = am5radar.ClockHand.new(this.root, {
      pinRadius: 0,
      radius: am5.percent(90),
      bottomWidth: 40
    });
    clockHandS.adapters.add("rotation", function () {
      return 90;
    });
    axisDataItemS.set("bullet", am5xy.AxisBullet.new(this.root, { sprite: clockHandS }));
    xAxis.createAxisRange(axisDataItemS);

    // Create labels
    const createLabel = (text: string, value: number, tickOpacity: number) => {
      let axisDataItem = xAxis.makeDataItem({ value });
      xAxis.createAxisRange(axisDataItem);
      let label = axisDataItem.get("label");
      label?.setAll({
        text,
        forceHidden: false,
        inside: true,
        //radius: 20
      });
      axisDataItem?.get("tick")?.setAll({
        forceHidden: false,
        strokeOpacity: tickOpacity,
        length: 12 * tickOpacity,
        visible: true,
        inside: true
      });
    };

    // Add directional labels
    createLabel("N", 0, 1);
    createLabel("NE", 45, 1);
    createLabel("E", 90, 1);
    createLabel("SE", 135, 1);
    createLabel("S", 180, 1);
    createLabel("SW", 225, 1);
    createLabel("W", 270, 1);
    createLabel("NW", 315, 1);
    for (let i = 0; i < 360; i += 5) {
      createLabel("", i, 0.5);
    }

    // Animation interval
    setInterval(() => {
      let newAngle = Math.random() * 360;
      chart.animate({
        key: "startAngle",
        to: newAngle,
        duration: 1000,
        easing: am5.ease.out(am5.ease.cubic)
      });
      chart.animate({
        key: "endAngle",
        to: newAngle + 360,
        duration: 1000,
        easing: am5.ease.out(am5.ease.cubic)
      });
      axisDataItemN.animate({
        key: "value",
        to: am5.math.normalizeAngle(-90 - newAngle),
        duration: 1000,
        easing: am5.ease.out(am5.ease.cubic)
      });
      axisDataItemS.animate({
        key: "value",
        to: am5.math.normalizeAngle(90 - newAngle),
        duration: 1000,
        easing: am5.ease.out(am5.ease.cubic)
      });
    }, 2000);

    // Animate chart on load
    chart.appear(1000, 100);
  }
}