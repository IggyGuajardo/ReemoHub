<?php
/**
 * Plugin Name: phone order
 * <?php
/*
Plugin Name: Accessory Order Form
Description: A simple plugin to add an accessory order form to your WordPress site.
Version: 1.0
Author: Your Name
*/

function accessory_order_form_shortcode() {
    ob_start();
    ?>
    <h1>Accessory Order Form</h1>
    <form action="/submit_accessory_order" method="post">
        <label for="accessory-details">Enter your accessory order details:</label><br>
        <textarea id="accessory-details" name="accessory_details" rows="5" cols="50"></textarea><br><br>
        <button type="submit" class="submit-btn">Submit Order</button>
    </form>
    <?php
    return ob_get_clean();
}
add_shortcode('accessory_order_form', 'accessory_order_form_shortcode');

function accessory_order_form_scripts() {
    // No scripts or styles needed for this simple form
}
add_action('wp_enqueue_scripts', 'accessory_order_form_scripts');
?>
