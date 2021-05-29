import {BrowserRouter, Switch, Route} from "react-router-dom";
import CadastrarInvestimento from "../pages/cadastrarInvestimento";
import ListarInvestimentos from "../pages/listarInvestimentos";

export default function Routes(){
    
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ListarInvestimentos}/>
                <Route exact path="/cadastrar-investimento" component={CadastrarInvestimento}/>
                <Route exact path="/listar-investimentos" component={ListarInvestimentos}/>
            </Switch>
        
        
        </BrowserRouter>
    );
}