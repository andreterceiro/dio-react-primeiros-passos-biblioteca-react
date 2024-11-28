export default function Button(props) {
    return (
        <div class="botao">
            <h3>Este é o meu botão</h3>
            <button>{props.name}</button>
        </div>
    );
}