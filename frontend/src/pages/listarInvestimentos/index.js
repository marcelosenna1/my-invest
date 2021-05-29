import "antd/dist/antd.css";
import { Table, Button, Layout, Menu, message } from 'antd'
import { Link } from "react-router-dom";
import { useState } from "react"

const { Header, Content, Footer } = Layout;
const { column } = Table;

export default function ListarInvestimentos() {

    const [investimentos, setInvestimentos] = useState([]);

    function remove(record) {
        message.success("Investimento removido com sucesso!");
    }


    return (
        <div className="container">
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">
                            <Link to="cadastrar-investimento">
                                Cadastrar Investimentos
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="listar-investimentos">
                                Listar Investimentos
                            </Link>
                        </Menu.Item>

                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>

                    <div className="site-layout-content">
                        <h2>INVESTIMENTOS</h2>

                        <Table dataSource={investimentos}>
                            <column title="Código do ativo" dataIndex="codigoAtivo" key="codigoAtivo" />
                            <column title="Valor" dataIndex="valor" key="valor" />
                            <column title="Quantidade de Cotas" dataIndex="quantidadeCotas" key="quantidadeCotas" />
                            <column title="Data da Compra" dataIndex="dataCompras" key="dataCompras" />
                            <column title="Remover" key="atualizar"
                                render={(text, record) => (<Button onClick={() => remove(record)}
                                    type="primary">Remover</Button>)}

                            />

                        </Table>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>My Invest 2021</Footer>
            </Layout>

        </div>


    );

}