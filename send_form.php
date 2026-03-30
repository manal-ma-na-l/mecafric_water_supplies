<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nom = htmlspecialchars(strip_tags($_POST['nom'] ?? ''));
    $sujet = htmlspecialchars(strip_tags($_POST['sujet'] ?? ''));
    $email = htmlspecialchars(strip_tags($_POST['email'] ?? ''));
    $message = htmlspecialchars(strip_tags($_POST['message'] ?? ''));

    if ($nom === '' || $sujet === '' || $email === '' || $message === '') {
        echo "<script>alert('Merci de remplir tous les champs obligatoires.'); window.location='contact.html';</script>";
        exit;
    }

    $to = "manalfarboussi44@gmail.com";
    $subject = "Nouveau message de contact - $nom";

    $body = "Nom: $nom\n";
    $body .= "Sujet: $sujet\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message\n";

    $headers = "From:$email\r\n";
    $headers .= "Reply-To: $to\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Message envoye avec succes !'); window.location='contact.html';</script>";
    } else {
        echo "<script>alert('Erreur lors de l\\'envoi du message.'); window.location='contact.html';</script>";
    }
}
?>
