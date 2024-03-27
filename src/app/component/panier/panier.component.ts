import { Component, Input } from '@angular/core';
import { ManagerPanierService } from '../../service/manager-panier.service';
import { LignePanier } from '../../models/Ligne';
import { Box } from '../../models/Box';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent{
  @Input()
  box:Box | undefined
  lignesPanier:LignePanier[]=[];
  isModalVisible: boolean = false;

  constructor(private panierService: ManagerPanierService){}
    ngOnInit(): void {
      this.lignesPanier = this.panierService.getPanier();
    }

    clearPanier() {
      this.panierService.clearPanier();
      this.lignesPanier = []; 
    }

    onAjout(uneBox: Box) {
      this.panierService.add(uneBox, 1);
    }
    
    onDelete(uneBox: Box) {
  this.panierService.remove(uneBox,1)
    }

    calculerPrixTotal(): number {
      let prixTotal = 0;
      for (const ligne of this.lignesPanier) {
        prixTotal += ligne.uneBox.prix * ligne.quantite;
      }
      return prixTotal;
    }
    validerPanier() {
      // Logique pour valider le panier, par exemple : envoyer la commande au serveur
      console.log("Panier validé !");
    }

   
  } 
  
