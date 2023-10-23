import { css } from "lit-element";

export default css`
    *{
        margin: 0px;
        padding: 0px;
        font-family: sans-serif;
    }

    .login-container-center{
        width: 100%;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login-form{
        flex-direction: flex-column;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    }

    .login-header{
        width: 30rem;
        height: 5rem;
        background-color: red;
        text-align: center;
        padding-top: 20px;
        color: white;
    }

    .login-main{
        padding: 1rem;
        padding-top: 3rem;
        padding-bottom: 3rem;

        display: flex;
        flex-direction: column;
    }

    .login-input{
        padding: 10px;
        border: none;
        border-bottom: 1px solid red;
        margin-bottom: 2rem;
    }

    .login-nav-bottom{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .login-red-btn{
        width: 100px;
        height: 50px;
        background-color: red;
        border: none;
        color: white;
        margin-bottom: 20px;
    }

    .login-link{
        color: gray;
        font-weight: 800;
        margin-bottom: 20px; 
    }

    .fondo{
        background-image: url("http://pumasdc.com.co/SITSS/resources/img/Recurso%201.png");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }
`