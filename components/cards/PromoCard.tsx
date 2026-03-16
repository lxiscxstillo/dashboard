import { Button } from "@/components/ui/button";

export default function PromoCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-secondary p-6 text-white shadow-card">
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/10" />
      <div className="absolute -bottom-12 right-8 h-24 w-24 rounded-full bg-white/10" />

      <div className="relative">
        <p className="text-lg font-semibold">Need More Stats?</p>
        <p className="mt-1 text-sm text-white/80">
          Upgrade to pro for added benefits.
        </p>
        <Button
          variant="success"
          className="mt-5 h-10 rounded-full px-5 text-sm font-semibold"
        >
          Go Pro Now
        </Button>
      </div>
    </div>
  );
}
