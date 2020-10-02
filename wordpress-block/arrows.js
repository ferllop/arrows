(function () {
    const { __ } = wp.i18n
    const { registerBlockType, getBlockDefaultClassName } = wp.blocks;
    const { InspectorControls } = wp.blockEditor;
    const { RangeControl, TextControl } = wp.components;
    const { createElement: el } = wp.element;
    const renderArrow = (attributes) => {
        return (
            el('div', {
                className: 'arrowscss-wrapper'
            }, [
                el('div', {
                    className: 'arrowscss',
                    'data-start': attributes.arrowFrom,
                    'data-slope': attributes.arrowSlope,
                    'data-curve-type': attributes.arrowCurve,
                    style: {
                        transform: `translateY(${attributes.wrapperTop}%) translateX(${attributes.wrapperLeft}%)`,
                        height: attributes.wrapperHeight + '%',
                        width: attributes.wrapperWidth + '%',
                        '--cap-size': attributes.capSize + 'em',
                        '--stroke': attributes.stroke + 'em'
                    }
                }, [
                    el('div', { className: 'cap', 'data-position': attributes.capPosition })
                ])
            ])
        )
    }

    registerBlockType('djmarian/arrows', {
        title: __('Arrows', 'djmarian'),
        description: __('Render arrows', 'djmarian'),
        icon: 'arrow-down-alt',
        category: 'widgets',
        // parent: ['core/column'],
        attributes: {
            wrapperTop: { default: 0 },
            wrapperLeft: { default: 0 },
            wrapperHeight: { default: 100 },
            wrapperWidth: { default: 100 },
            capSize: { default: 4 },
            stroke: { default: 0.7 },
            arrowFrom: { default: 'top-left' },
            arrowSlope: { default: 'horizontal' },
            arrowCurve: { default: '' },
            capPosition: { default: 'end' }
        },


        edit: ({ className, attributes, setAttributes }) => {

            return (
                el('div', {
                    style: {
                        height: '100%'
                    }
                }, [
                    el(InspectorControls, {}, [
                        el(TextControl, {
                            value: attributes.arrowFrom,
                            label: 'From',
                            onChange: value => {
                                setAttributes({ arrowFrom: value })
                            }
                        }),
                        el(TextControl, {
                            value: attributes.arrowSlope,
                            label: 'Slope',
                            onChange: value => {
                                setAttributes({ arrowSlope: value })
                            }
                        }),
                        el(TextControl, {
                            value: attributes.arrowCurve,
                            label: 'Curve',
                            onChange: value => {
                                setAttributes({ arrowCurve: value })
                            }
                        }),
                        el(TextControl, {
                            value: attributes.capPosition,
                            label: 'Cap position',
                            onChange: value => {
                                setAttributes({ capPosition: value })
                            }
                        }),
                        el(RangeControl, {
                            value: attributes.wrapperTop,
                            label: 'Move vertically',
                            min: -100,
                            max: 100,
                            onChange: value => {
                                setAttributes({ wrapperTop: value })
                            }
                        }),
                        el(RangeControl, {
                            value: attributes.wrapperLeft,
                            label: 'Move horizontally',
                            min: -100,
                            max: 100,
                            onChange: value => {
                                setAttributes({ wrapperLeft: value })
                            }
                        }),
                        el(RangeControl, {
                            value: attributes.wrapperHeight,
                            label: 'Scale vertically',
                            min: 0,
                            max: 200,
                            step: 1,
                            onChange: value => setAttributes({ wrapperHeight: value })
                        }),
                        el(RangeControl, {
                            value: attributes.wrapperWidth,
                            label: 'Scale horizontally',
                            min: 0,
                            max: 200,
                            step: 1,
                            onChange: value => setAttributes({ wrapperWidth: value })
                        }),
                        el(RangeControl, {
                            value: attributes.capSize,
                            label: 'Cap size',
                            min: 0,
                            max: 10,
                            step: 0.25,
                            onChange: value => setAttributes({ capSize: value })
                        }),
                        el(RangeControl, {
                            value: attributes.stroke,
                            label: 'Stroke',
                            min: 0,
                            max: 2,
                            step: 0.05,
                            onChange: value => setAttributes({ stroke: value })
                        })
                    ]),
                    renderArrow(attributes)
                ])
            )
        },

        save: ({ attributes }) => renderArrow(attributes)
    })

})()




