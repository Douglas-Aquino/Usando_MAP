//Crie um component de class
//Crie um array de objetos no STATE com pelo menos 6 objetos
//Faça um map do seu state e exiba os dados na tela

import React, {Component} from "react"

export default class pessoas extends Component {

    state = [{nome:"Douglas",cidade:"New York",idade:18},{nome:"Anna",cidade:"Rio",idade:20},{nome:"Jose",cidade:"Cuba",idade:19},  {nome:"Livia",cidade:"Capetinga",idade:18},{nome:"Isadora",cidade:"França",idade:21},{nome:"kiki",cidade:"São Paulo",idade:23}]

    render(){
        <main>
        return (
            {this.state.pessoas.map((item) =>(
                
                <div>
                    <h1>
                        {item.idade}
                    </h1>
                
                </div>

            ))}

        )
    </main>}
}
