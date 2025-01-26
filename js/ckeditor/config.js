CKEDITOR.editorConfig = function (config) {
    config.toolbar = [
        // {name: 'document', items: ['Source']},
        // {name: 'styles', items: ['FontSize']},
        // {name: 'colors', items: ['TextColor', 'BGColor']},
        // {name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript']},
        // {
        //     name: 'paragraph',
        //     items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', "-", "Blockquote"]
        // },
        // {name: 'links', items: ['Link', 'Unlink']},
        // {name: 'insert', items: ['Image', 'Table', 'HorizontalRule']},
        {name: 'toolbar', items: [
                'Source', '-', 'FontSize',
                '-', 'TextColor', 'BGColor',
                '-', 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript',
                '-', 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', "-", "Blockquote",
                '-', 'Link', 'Unlink',
                '-', 'Image', 'Table', 'HorizontalRule'
            ]},
    ];

    let sizeHe = window.innerHeight-120;

    config.extraPlugins = 'autogrow';
    config.autoGrow_minHeight = 250;
    config.autoGrow_maxHeight = sizeHe;
    config.height = sizeHe;
    config.resize_maxHeight = sizeHe;
    config.resize_minHeight = sizeHe;
    config.autoGrow_bottomSpace = 10;
    config.autoGrow_onStartup = false;
    config.resize_enabled = false;
};