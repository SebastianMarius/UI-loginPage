import logo from './logo.svg';
import './App.css';
import ParticleEffectButton from 'react-particle-effect-button';
import { useState } from 'react';

function App() {
    const [hidden, setHidden] = useState(false);

    const buttonOnClickFunction = () => {
        setHidden(!hidden);
        console.log('mata');
    };
    const oncompleteAnimation = () => {
        setHidden(false);
    };

    return (
        <>
            <main>
                <section className='glass'>
                    <div className='loginSection'>
                        <h1>Welcome back! </h1>

                        <div className='credentials'>
                            <h2>Your username:</h2>
                            <input></input>
                            <h2>Your password:</h2>
                            <input></input>

                            <ParticleEffectButton
                                className='buttonLoginParticle'
                                color='#69C3FF'
                                hidden={hidden}
                                onComplete={oncompleteAnimation}>
                                <button
                                    onClick={buttonOnClickFunction}
                                    className='buttonLogin'>
                                    {' '}
                                    <h3> Let's go!</h3>
                                </button>
                            </ParticleEffectButton>
                        </div>
                    </div>
                </section>
                <div className='circle1'></div>
                <div className='circle2'></div>
            </main>

            <h1>TEST</h1>
            <h1>AKT TEST</h1>
        </>
    );
}

export default App;
