export const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export const CapitalizePokemonName = (name: string): string => {
  if (typeof name !== 'string') return '';
  return name.charAt(0).toUpperCase() + name.slice(1);
};
