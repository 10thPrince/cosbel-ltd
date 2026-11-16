const headers = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
];
export default {
  reactStrictMode: true, poweredByHeader: false, compress: true,
  images: { formats: ["image/avif", "image/webp"], minimumCacheTTL: 31536000 },
  async headers() { return [{ source: "/(.*)", headers }]; },
};
