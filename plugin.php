<?php

/**
 * Plugin Name: Majestic Gutenberg
 * Plugin URI: https://niclastimmdev.com
 * Description: The best Gutenberg Block library out there.
 * Author: Niclas Timm
 * Author URI: https://niclastimmdev.com
 */

// Denie direct access.
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Register a new block
 * 
 * @param string $block_name
 *   The name of the new Gutenberg block.
 * @param array $custom_options
 *   The custom options for the block. E.g., custom stylesheet.
 */
function majestic_gutenberg_register_block(string $block_name, array $custom_options = [])
{
    // Create the final options array of some default settings and the custom settings.
    $options = array_merge(
        array(
            // JS script for the backend.
            'editor_script' => 'majestic-gutenberg-editor-script',
            // CSS in the backend.
            'editor_style' => 'majestic-gutenberg-editor-style',
            // JS script for the frontend.
            'script' => 'majestic-gutenberg-frontend-script',
            // CSS in the frontend.
            'style' => 'majestic-gutenberg-editor-style',

        ),
        $custom_options
    );

    // Register a new block type.
    register_block_type('majestic-gutenberg/' . $block_name, $options);
}

/**
 * Add a new category named 'Majestic Gutenberg' to the default block categories.
 * 
 * @param array $categories
 *   Array of block categories.
 * @param WP_POST $post
 *   Post being loaded.
 * 
 * @return array
 *   Tne new block category.
 */
function majestic_gutenberg_categories($categories, $post)
{
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'majestic-gutenberg-category',
                'title' => __('Majestig Gutenberg', 'majestic-gutenberg'),
                'icon' => 'wordpress',
            ),
        )
    );
}
add_filter('block_categories', 'majestic_gutenberg_categories', 10, 2);

/**
 * Init the Gutenberg settings and options. Execute on plugin init.
 */
function majestic_gutenberg_init()
{
    // Register the editor (backend) JS script.
    wp_register_script(
        'majestic-gutenberg-editor-script',
        plugins_url('dist/editor.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-i18n', 'wp-block-editor', 'wp-components')
    );

    // Register the frontend JS script.
    wp_register_script(
        'majestic-gutenberg-frontend-script',
        plugins_url('dist/script.js', __FILE__),
        array('wp-blocks', 'wp-i18n')
    );

    // Register the editor CSS stylesheet.
    wp_register_style(
        'majestic-gutenberg-editor-style',
        plugins_url('dist/bundle.css', __FILE__),
        array('wp-edit-blocks')
    );

    // Testblock.
    // TODO: Remove this block.
    majestic_gutenberg_register_block('firstblock');
    // Inline Notice Block.
    majestic_gutenberg_register_block('inline-notice');
    // Inline Notice Block.
    majestic_gutenberg_register_block('testimonials');
    // Team Members Block.
    majestic_gutenberg_register_block('team-members');
    majestic_gutenberg_register_block('parent');
    majestic_gutenberg_register_block('advanced-grid');
}
add_action('init', 'majestic_gutenberg_init');