import "antd/dist/antd.css";
import { Button, Form, DatePicker, Input, InputNumber, Layout, Menu, message } from 'antd'
import { Link } from "react-router-dom";
import InvestimentoService from "../../service/InvestimentoService";




const { Header, Content, Footer } = Layout;

export default function CadastrarInvestimento() {

    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 3 },
    };
    const tailLayout = {
        wrapperCol: { offset: 4, },
    };

    const onFinish = (values) => {
        InvestimentoService.saveInvestimento(values)
        message.success("Investimento Salvo com sucesso")
    }

    const onFinishFailed = (errorInfo) => {
        message.danger("Erro")
        console.log('Failed: ', errorInfo)
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
                        <h2>CADASTRAR INVESTIMENTO</h2>

                        <Form {...layout} name="basic"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}

                        >

                            <Form.Item
                                label="Código do ativo"
                                name="codigoAtivo"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Insira o código do ativo!',
                                    },
                                ]}>
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Valor"
                                name="valorCota"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Insira o valor da cota',
                                    },
                                ]}>
                                <InputNumber />
                            </Form.Item>

                            <Form.Item
                                label="Quantidade de cotas"
                                name="qtdCotas"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Insira a quantidade de cotas!',
                                    },
                                ]}>
                                <InputNumber />
                            </Form.Item>

                            <Form.Item
                                label="Data da compra"
                                name="dataCompra"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Insira a data da compra!',
                                    },
                                ]}>
                                <DatePicker />
                            </Form.Item>

                            <Form.Item
                                label="Categoria"
                                name="categoria"
                            >
                                <Input />
                            </Form.Item>


                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Salvar
                            </Button>
                            </Form.Item>

                        </Form>


                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>My Invest 2021</Footer>
            </Layout>

        </div>

    );
}
