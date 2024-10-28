<?php

$recipient = "support@traingo.bg";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = isset($_POST['name']) ? stripslashes(trim($_POST['name'])) : '';
    $email = isset($_POST['email']) ? stripslashes(trim($_POST['email'])) : '';
    $message = isset($_POST['message']) ? stripslashes(trim($_POST['message'])) : '';

    $errors = [];

    if (empty($name)) {
        $errors[] = "Моля, въведете име и фамилия.";
    }

    if (empty($email)) {
        $errors[] = "Моля, въведете имейл.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Невалиден формат на имейла.";
    }

    if (empty($message)) {
        $errors[] = "Моля, въведете съобщение.";
    }

    if (!empty($errors)) {
        echo '<div class="alert alert-danger alert-dismissable fade in">';
        foreach ($errors as $error) {
            echo "<p>$error</p>";
        }
        echo '</div>';
    } else {
        $fullMessage = "Име: $name\nИмейл: $email\n\nСъобщение:\n$message";

        if (mail($recipient, "Ново съобщение от контактната форма", $fullMessage, "From: $email")) {
            echo '<div class="alert alert-success alert-dismissable fade in">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    <p>Съобщението беше изпратено успешно! Ще се свържем с вас скоро.</p>
                  </div>';
        } else {
            echo '<div class="alert alert-danger alert-dismissable fade in">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    <p>Възникна грешка при изпращане на съобщението. Моля, опитайте отново по-късно.</p>
                  </div>';
        }
    }
} else {
    echo '<div class="alert alert-danger">Невалидна заявка.</div>';
}

?>
