import { createContext, useContext } from 'react'
import { useToast as useToastHook } from '../hooks/useToast'
import ToastContainer from '../components/Toast'

const ToastContext = createContext(null)

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within ToastProvider')
  }
  return context
}

export const ToastProvider = ({ children }) => {
  const { toasts, removeToast, toast } = useToastHook()

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  )
}
