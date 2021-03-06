<?php
add_action( 'init', 'ferllop_register_block_arrows');
function ferllop_register_block_arrows() {
    if ( ! is_gutenberg_active() ) {
        return;
    }

    $block_name = 'arrows';

    wp_register_script( 
        $block_name,
        plugins_url( 'arrows.js', __FILE__ ),
        [
            'wp-blocks',
            'wp-i18n',
            'wp-element',
            'wp-components',
            'wp-editor'
        ]
    );

    wp_register_style( 
        $block_name,
        plugin_dir_url( __DIR__ ) . 'css/main.css', 
        [ 
            'wp-edit-blocks' 
        ]
    );

    register_block_type( 'ferllop/arrows', [
        'editor_script' => $block_name,
        'editor_style' => $block_name,
        'style' => $block_name
    ]);

}

if (! function_exists('is_gutenberg_active')){
    function is_gutenberg_active(){
        return function_exists('register_block_type');
    }
}

