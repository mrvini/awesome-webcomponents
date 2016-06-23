'use strict';

awesome.requireCSS(`${awesome.path}components/widgets/awesome-plus-minus.css`);
awesome.requireScript(`${awesome.path}components/ball/awesome-ball.js`);

(
    function(){

        const defaults = {
            set_action: '',
            reset_action: ''
        }

        const component=new AwesomeComponent;
        component.tagName='awesome-plus-minus';
        component.extends='AwesomeBall';

        component.create=function creatAwesomePlusMinus(){

            return class AwesomePlusMinus extends awesome.component.AwesomeBall{
                createdCallback(){
                    this.mergeDataset(defaults);
                    super.createdCallback();
                    this.classList.add(AwesomePlusMinus.elementTagName);

                    this.localize(
                        'set',
                        'reset'
                    );

                    this.innerHTML += `
                        <div
                            class = 'controlFront target'
                        >
                        </div>
                        <section
                            class = 'singleIncrementControls target'
                        >
                            <button
                                id = 'decrementButton'
                            >
                                -
                            </button>
                            <button
                                id = 'incrementButton'
                            >
                                +
                            </button>
                        </section>
                        <section class = 'setControls target'>
                            <button
                                id = 'resetButton'
                                class = 'resetButton'
                            >
                                ${this.local.reset}
                            </button>

                            <button
                                id = 'setButton'
                                class = 'setButton'
                            >
                                ${this.local.set}
                            </buton>
                        </section>

                        <input class = 'target'>
                    `;
                    this.input = this.querySelector('input');
                    this.setControls = this.querySelector('.setControls');
                    this.ballValue = this.querySelector('.ballValue');

                    this.setButton = this.querySelector('.setButton');
                    this.resetButton = this.querySelector('.resetButton');

                    this.input.addEventListener(
                        'change',
                        this.changeHandler.bind(this)
                    );
                }

                attachedCallback(){
                    super.attachedCallback();
                    this.addEventListener(
                        'click',
                        this.clickHandler.bind(this)
                    );
                }

                detachedCallback(){
                    super.detachedCallback();
                    this.removeEventListener(
                        'click',
                        this.clickHandler.bind(this)
                    );

                    this.input.removeEventListener(
                        'change',
                        this.changeHandler.bind(this)
                    );
                }

                clickHandler(e){
                    if(e.target.id === 'ballValue'
                        || e.target.classList.contains('target')
                        || e.target.parentElement.classList.contains('target')
                    ){
                        this.displayExtraControls();
                        document.body.addEventListener(
                            'click',
                            this.optionsHandler.bind(this)
                        );
                    }

                    if(!e.target.id){
                        return;
                    }

                    switch (e.target.id) {
                        case 'incrementButton':
                            this.increment();
                            this.input.value = this.dataset.value;
                            break;
                        case 'decrementButton':
                            this.decrement();
                            this.input.value = this.dataset.value;
                            break;
                        case 'setButton':
                            if(!this.dataset.actions.hasOwnProperty(this.dataset.set_action)){
                                console.warn('You set_action has not been defined!');
                                return;
                            }
                            dispatcher.trigger(
                                this.dataset.set_action,
                                true
                            );
                            break;
                        case 'resetButton':
                            if(!this.dataset.actions.hasOwnProperty(this.dataset.reset_action)){
                                console.warn('No reset_action has not been defined!');
                                return;
                            }
                            dispatcher.trigger(
                                this.dataset.reset_action,
                                true
                            );
                            break;
                        default:
                            break;
                    }
                }

                changeHandler(e){
                    this.dataset.value = this.input.value;
                }

                optionsHandler(e){
                    if(e.target.id == 'ballValue'
                        || e.target.classList.contains('target')
                        || e.target.parentElement.classList.contains('target')
                    ){
                        return;
                    }

                    document.querySelector('body').removeEventListener(
                        'click',
                        this.optionsHandler.bind(this)
                    );

                    this.hideExtraControls();
                }

                displayExtraControls(){
                    this.input.value = this.dataset.value;
                    this.input.focus();
                    this.input.classList.add('showInput')
                    this.setControls.classList.add('showControls');
                }

                hideExtraControls(){
                    this.dataset.value = this.input.value;
                    this.input.classList.remove('showInput')
                    this.setControls.classList.remove('showControls');
                }

                attributeChangedCallback(key,oldValue,newValue){
                    super.attributeChangedCallback(key,oldValue,newValue);
                    const plusMinusChange = new Event(
                        'change',
                        {
                            'view':'window',
                            'bubbles':'true',
                            'cancelable':'false',
                        }
                    );
                    this.dispatchEvent(plusMinusChange);
                }
            }
        }

        component.init();
    }
)();
