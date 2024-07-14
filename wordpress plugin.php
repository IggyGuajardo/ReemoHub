<?php
/**
 * Plugin Name: phone order
 */function phone_order_form_shortcode() {
    ob_start();
    ?>
    <h1>Order Phones</h1>
    <div id="form-container"></div>
    <?php
    return ob_get_clean();
}
add_shortcode('phone_order_form', 'phone_order_form_shortcode');

function phone_order_form_scripts() {
    wp_enqueue_style('phone-order-form-style', plugins_url('/style.css', __FILE__));
    wp_enqueue_script('phone-order-form-script', plugins_url('/script.js', __FILE__), array(), false, true);
}
add_action('wp_enqueue_scripts', 'phone_order_form_scripts');
?>