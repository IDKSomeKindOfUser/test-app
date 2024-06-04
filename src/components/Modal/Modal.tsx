import React from 'react';
import {ModalProps} from "@/components/Modal/Modal.props";

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-[#232324] p-6 rounded-lg shadow-lg z-10 relative w-full max-w-3xl mx-4 max-h-full overflow-y-auto">
                <button className="absolute top-1 right-1 p-4 text-white" onClick={onClose}>
                    ✖
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;