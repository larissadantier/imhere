import Toast from 'react-native-toast-message';

interface ToastProps {
  type: string,
  title: string,
  subtitle: string,
}


export function showToast({ type, title, subtitle }: ToastProps) {
  Toast.show({
    type,
    text1: title,
    text2: subtitle,
  })
}