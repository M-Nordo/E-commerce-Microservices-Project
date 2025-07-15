import axios from 'axios';
import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from 'dotenv';
dotenv.config();

const registryURL = process.env.REGISTRY_URL;

const dynamicProxy = (serviceName) =>
  async (req, res, next) => {
    try {
      const { data } = await axios.get(`${registryURL}/services`);
      const instances = data[serviceName];

      if (!instances || instances.length === 0) {
        return res.status(502).json({ error: `Service ${serviceName} not available` });
      }

      const targetInstance = instances[0];
      const targetUrl = `http://${targetInstance.host}:${targetInstance.port}`;

      return createProxyMiddleware({
        target: targetUrl,
        changeOrigin: true,
        pathRewrite: {
          [`^/api/${serviceName}`]: ''
        }
      })(req, res, next);

    } catch (err) {
      console.error('[Gateway Error]', err.message);
      return res.status(500).json({ error: 'Gateway proxy error' });
    }
  };

export { dynamicProxy };