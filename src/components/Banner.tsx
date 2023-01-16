interface IBannerProps {
  src: string;
  title?: string;
  text?: string;
}

export default function Banner({ src, title, text }: IBannerProps) {
  return (
    <div className="w-full h-full my-4 relative">
      <img src={src} alt={title} className="w-full h-[320px] object-fill" />
      {text && (
        <h1 className="absolute bottom-10 right-10 text-2xl text-neutral-200 md:text-4xl">
          {text}
        </h1>
      )}
    </div>
  );
}
