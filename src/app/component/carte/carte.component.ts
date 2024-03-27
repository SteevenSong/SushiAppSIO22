import { Component } from '@angular/core';
import { SushiBoxService } from '../../service/sushi-box.service';
import { Box } from '../../models/Box';
import { ManagerPanierService } from '../../service/manager-panier.service';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrl: './carte.component.css'
})

export class CarteComponent {
  boxes:Array<Box>
  detailBox:Box | null
  numero: number = 0;
  constructor(private sushiBoxService: SushiBoxService, private panierService: ManagerPanierService){
    this.detailBox=null
    this.getBoxes();
    this.boxes=[]
  }

getBoxes(): void {
  this.sushiBoxService.Box().subscribe((res: any)=>{
    
    this.boxes=res
    console.log(this.boxes);
  })
} 

onDetails(laBox:Box){
  this.detailBox=laBox
  console.log(this.detailBox)
}




}
