// Описываем структуру одного поля формы
interface FieldState {
  value: unknown;
  touched: boolean;
  dirty: boolean;
  valid: boolean;
  invalid: boolean;
  error: { message?: string; [key: string]: unknown } | null;
}

// Описываем структуру всего объекта $form
export interface PrimeVueFormState {
  values: Record<string, unknown>;
  errors: Record<string, unknown>;
  touched: Record<string, boolean>;
  dirty: boolean;
  valid: boolean;
  states: Record<string, FieldState>; // состояние каждого поля
  [key: string]: unknown; // поддержка динамического обращения типа $form.username
}
