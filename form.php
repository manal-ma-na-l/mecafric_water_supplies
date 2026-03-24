<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Nettoyage des données pour la sécurité
    $nom = htmlspecialchars(strip_tags($_POST['nom']));
    $prenom = htmlspecialchars(strip_tags($_POST['prenom']));
    $societe = htmlspecialchars(strip_tags($_POST['societe']));
    $telephone = htmlspecialchars(strip_tags($_POST['telephone']));
    $email = htmlspecialchars(strip_tags($_POST['email']));
    $pays = htmlspecialchars(strip_tags($_POST['pays']));
    $message = htmlspecialchars(strip_tags($_POST['message']));

    // Destinataire
    $to = "manalfarboussi44@gmail.com"; // <-- mets ton email ici
    $subject = "Nouvelle demande de devis - $nom $prenom";

    // Corps de l'email
    $body = "Nom: $nom\n";
    $body .= "Prénom: $prenom\n";
    $body .= "Société: $societe\n";
    $body .= "Téléphone: $telephone\n";
    $body .= "Email: $email\n";
    $body .= "Pays: $pays\n\n";
    $body .= "Message:\n$message\n";

    // Headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Envoi de l'email
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Email envoyé avec succès !'); window.location='formulaire.html';</script>";
    } else {
        echo "<script>alert('Erreur lors de l\'envoi de l\'email.'); window.location='formulaire.html';</script>";
    }
}
?>