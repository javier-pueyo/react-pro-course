import "../styles/styles.css";

export default function RegisterPage() {
    return (
        <div>
            <h1>RegisterPage</h1>
            <form action="">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input
                    type="password"
                    placeholder="Repeat password"
                />
                <button type="submit">Create</button>
            </form>
        </div>
    );
}
