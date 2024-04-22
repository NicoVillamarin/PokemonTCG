import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CardBack from "../assets/back.png"
const LoadingCard = () => {
    const [loadingStep, setLoadingStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingStep(step => (step + 1) % 3);
        }, 1000); // Cambia la imagen cada 2 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="d-flex justify-content-center align-items-center mt-5" style={{ gap: 20 }}>
            <motion.div
                className="card"
                animate={{ rotateY: loadingStep === 1 ? 180 : 0, rotateZ: loadingStep === 2 ? 360 : 0 }}
                transition={{ duration: 1 }}
            >
                <motion.img
                    src={loadingStep === 0 ? CardBack : CardBack}
                    alt="Card"
                    style={{ maxWidth: 200, height: 'auto', backfaceVisibility: 'hidden', objectFit: 'cover' }}
                />
            </motion.div>
            <motion.div
                className="card"
                animate={{ rotateY: loadingStep === 1 ? 180 : 0, rotateZ: loadingStep === 2 ? 360 : 0 }}
                transition={{ duration: 1 }}
            >
                <motion.img
                    src={loadingStep === 0 ? CardBack : CardBack}
                    alt="Card"
                    style={{ maxWidth: 200, height: 'auto', backfaceVisibility: 'hidden', objectFit: 'cover' }}
                />
            </motion.div>
            <motion.div
                className="card"
                animate={{ rotateY: loadingStep === 1 ? 180 : 0, rotateZ: loadingStep === 2 ? 360 : 0 }}
                transition={{ duration: 1 }}
            >
                <motion.img
                    src={loadingStep === 0 ? CardBack : CardBack}
                    alt="Card"
                    style={{ maxWidth: 200, height: 'auto', backfaceVisibility: 'hidden', objectFit: 'cover' }}
                />
            </motion.div>
        </div>
    );
};

export default LoadingCard;
