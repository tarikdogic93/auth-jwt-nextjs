type FormErrorProps = {
  error: string[];
};

export function FormError({ error }: FormErrorProps) {
  return <p className="text-red-500">{error}</p>;
}
