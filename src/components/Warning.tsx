export default function Warning({ text }: { text: string }) {
  return (
    <p className="bg-neutral-200 rounded-md p-10 text-center text-lg font-bold">
      {text}
    </p>
  );
}
