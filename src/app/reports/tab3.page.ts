import { Component } from '@angular/core';
import { ReportService } from '../services/tienda/report.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  selectedDate!: string;

  constructor(private reportService: ReportService) {}

  generateReport() {
    if (this.selectedDate) {
      const formattedDate = this.selectedDate.split('T')[0]; // Asegurarse de que solo se envíe la fecha en formato YYYY-MM-DD
      this.reportService.generateSalesReport(formattedDate).subscribe((data: Blob) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      });
    } else {
      console.log('Selecciona una fecha');
    }
  }
}