import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from "../../providers/moovie/moovie";

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {
  public nome_usuario:string = "Marty Mcfly do código"; 
  public objeto_feed = {
    titulo:"Marty McFly",
    data:"5, Setembro de 2017",
    descricao:"Estou criando um app incrível...",
    qntd_likes:12,
    qntd_comments:4,
    time_comment: "05 Set"
  }

  public lista_filmes = new Array<any>();

  constructor(public navCtrl: NavController, 
            public navParams: NavParams,
            private movieProvider: MoovieProvider) {
    
  }

  public somaDoisNumeros(): void{
    //alert("minha função funcionou...");
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )
  }

}
