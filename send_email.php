<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nom = htmlspecialchars(strip_tags($_POST['nom'] ?? ''));
    $prenom = htmlspecialchars(strip_tags($_POST['prenom'] ?? ''));
    $societe = htmlspecialchars(strip_tags($_POST['societe'] ?? ''));
    $telephone = htmlspecialchars(strip_tags($_POST['telephone'] ?? ''));
    $email = htmlspecialchars(strip_tags($_POST['email'] ?? ''));
    $pays = htmlspecialchars(strip_tags($_POST['pays'] ?? ''));
    $message = htmlspecialchars(strip_tags($_POST['message'] ?? ''));

    if ($nom === '' || $prenom === '' || $telephone === '' || $email === '' || $pays === '' || $message === '') {
        echo "<script>alert('Merci de remplir tous les champs obligatoires.'); window.location='formulaire.html';</script>";
        exit;
    }

    $to = "water@mecafric.ma";
    $subject = "Nouvelle demande de devis - $nom $prenom";

    $body = "Nom: $nom\n";
    $body .= "Prenom: $prenom\n";
    $body .= "Societe: $societe\n";
    $body .= "Telephone: $telephone\n";
    $body .= "Email: $email\n";
    $body .= "Pays: $pays\n\n";
    $body .= "Message:\n$message\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $to\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Demande envoyee avec succes !'); window.location='formulaire.html';</script>";
    } else {
        echo "<script>alert('Erreur lors de l\\'envoi de la demande.'); window.location='formulaire.html';</script>";
    }
}
?>
