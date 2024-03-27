import { Component, Input } from '@angular/core';
import { Box } from '../../models/Box';
import { ManagerPanierService } from '../../service/manager-panier.service';

@Component({
  selector: 'app-boxcarte',
  templateUrl: './boxcarte.component.html',
  styleUrl: './boxcarte.component.css'
})
export class BoxcarteComponent {
  @Input()
box:Box | undefined
numero:number=0

constructor( private panierService:ManagerPanierService){

}


onAjout(uneBox: Box) {
  this.numero++;
}

onDelete(uneBox: Box) {
  this.numero--;
  if (this.numero < 0) {
    this.numero = 0; // Assure que le nombre ne devient pas négatif
  }
}

ajouterAuPanier(uneBox: Box) {
  // Ajouter uneBox au panierService avec une quantité égale à this.numero
  this.panierService.add(uneBox, this.numero);
  // Réinitialiser le compteur à zéro après l'ajout au panier
  this.numero = 0;
}

}
