
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // permite qualquer domínio HTTPS
      },
      
    ],
    
  },
};

module.exports = nextConfig;


export default nextConfig;
