import { useState } from 'react';
import './Contatos.css'
import Maps from '../../components/Maps';
import emailjs from 'emailjs-com';

function Contatos() {
    const [formData, setFormData] = useState({
        nomeCompleto: '',
        email: '',
        celular: '',
        telefone: '',
        assunto: '',
        dataInicio: '',
        dataFinal: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const formatarData = (dataISO) => {
        if (!dataISO) return '';
        const [ano, mes, dia] = dataISO.split('-');
        return `${dia}/${mes}/${ano}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formDataFormatado = {
            ...formData,
            dataInicio: formatarData(formData.dataInicio),
            dataFinal: formatarData(formData.dataFinal),
        };

        sendEmail(formDataFormatado);
    }

    const sendEmail = (formData) => {

        emailjs.send('service_5sidzo9', 'template_y2lokql', formData, 'A4NEFYxu9Ww59nTvN')
            .then((response) => {
                console.log('Sucesso:', response);
                alert('Mensagem enviada com sucesso!');
            })
            .catch((error) => {
                console.error('Erro:', error);
                alert('Erro ao enviar a mensagem.');
            });
    };

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 col-lg-6 order-2 order-lg-1 mt-auto"><Maps /></div>

                <div className="col-12 col-lg-6 order-1 order-lg-2 mb-5 mb-lg-0 d-flex justify-content-center align-items-center d-flex flex-column">
                    <h3>Preencha o Formulário</h3>
                    <p>Em breve, entraremos em contato para ajudá-lo da melhor forma possível!</p>

                    <div className='container-fluid container-form'>
                        <form onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className='col-12 col-lg-6'>
                                    <div className="mb-3">
                                        <label htmlFor="nomeCompleto" className="form-label">Nome Completo</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nomeCompleto"
                                            name="nomeCompleto"
                                            value={formData.nomeCompleto}
                                            onChange={handleInputChange}
                                            placeholder="Digite seu nome completo"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='col-12 col-lg-6'>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">E-mail</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Digite seu e-mail"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='col-12 col-lg-6'>
                                    <div className="mb-3">
                                        <label htmlFor="celular" className="form-label">Celular</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="celular"
                                            name="celular"
                                            value={formData.celular}
                                            onChange={handleInputChange}
                                            placeholder="Digite seu celular"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='col-12 col-lg-6'>
                                    <div className="mb-3">
                                        <label htmlFor="telefone" className="form-label">Telefone</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="telefone"
                                            name="telefone"
                                            value={formData.telefone}
                                            onChange={handleInputChange}
                                            placeholder="Digite seu telefone"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="mb-3">
                                        <label htmlFor="dataInicio" className="form-label">Check-in</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="dataInicio"
                                            name="dataInicio"
                                            value={formData.dataInicio}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='col-6'>
                                    <div className="mb-3">
                                        <label htmlFor="dataFim" className="form-label">Check-out</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="dataFim"
                                            name="dataFinal"
                                            value={formData.dataFinal}
                                            onChange={handleInputChange}
                                            min={formData.dataInicio}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className="mb-3">
                                        <label htmlFor="assunto" className="form-label">Assunto</label>
                                        <select
                                            className="form-select"
                                            id="assunto"
                                            name="assunto"
                                            value={formData.assunto}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Selecione um assunto</option>
                                            <option value="suporte">Suporte</option>
                                            <option value="Reserva">Reserva</option>
                                            <option value="informacoes">Informações</option>
                                            <option value="outro">Outro</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-lg-auto">
                                <div className="col-12 d-flex justify-content-center align-items-center justify-content-lg-start">
                                    <button type="submit" className="btn btn-custom">Enviar</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            <div className='row mt-5'>
                <div className='col-6'>
                    <h1>Endereço</h1>
                    <p className='mt-4'>R. José Tomé Filho, 26 - Santo Hilário, Pimenta - MG, 35585-000</p>
                </div>
                <div className='col-6'>

                </div>
            </div>

        </div>
    );
}

export default Contatos;
