import { useState, useCallback, useEffect } from 'react';
import type { ModalType } from '../types';

export function useModal() {
  const [modalType, setModalType] = useState<ModalType>(null);

  const openModal = useCallback((type: ModalType) => {
    setModalType(type);
    document.body.classList.add('modal-active');
  }, []);

  const closeModal = useCallback(() => {
    setModalType(null);
    document.body.classList.remove('modal-active');
  }, []);

  useEffect(() => {
    return () => {
      document.body.classList.remove('modal-active');
    };
  }, []);

  return { modalType, openModal, closeModal };
}
