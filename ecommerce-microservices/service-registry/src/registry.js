const services = {};

function register(serviceName, serviceUrl) {
  services[serviceName] = {
    url: serviceUrl,
    timestamp: Date.now()
  };
  console.log(`[Registry] Registered: ${serviceName} ➜ ${serviceUrl}`);
}

function get(serviceName) {
  return services[serviceName];
}

function getAll() {
  return services;
}

export { register, get, getAll };