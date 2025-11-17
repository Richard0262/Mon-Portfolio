import "./Contact.css";

export default function Contact() {
  return (
    <section className="contacts">
      <h1>Contacts</h1>
      <p>Si vous souhaitez me contacter, veuillez remplir le formulaire ci-dessous.</p>

      <form>
        <input type="text" placeholder="Votre nom" required />
        <input type="email" placeholder="Votre email" required />
        <textarea placeholder="Votre message" rows="5" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}
