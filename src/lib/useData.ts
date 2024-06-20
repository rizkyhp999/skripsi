// utils/useData.ts
import useSWR from "swr";

// Fungsi fetcher untuk mengambil data dari API
export async function fetcher(url: string) {
  const res = await fetch(url);
  const data = await res.json();
  return data.data;
}

// Custom hook untuk mengambil data carousel
export function useCarouselData() {
  const { data, error, isValidating } = useSWR("/api/carousel", fetcher, {
    revalidateOnMount: true, // Mengambil data baru setiap kali komponen dipasang ulang
    refreshInterval: 0, // Mematikan polling untuk memperbarui data secara teratur
  });

  return { data, error, isLoading: isValidating };
}

// Custom hook untuk mengambil data vitalitas
export function useVitalitasData() {
  const { data, error, isValidating } = useSWR("/api/vitalitas", fetcher, {
    revalidateOnMount: true,
    refreshInterval: 0,
  });

  return { data, error, isLoading: isValidating };
}

// Custom hook untuk mengambil data infografik
export function useInfografikData() {
  const { data, error, isValidating } = useSWR("/api/infografik", fetcher, {
    revalidateOnMount: true,
    refreshInterval: 0,
  });

  return { data, error, isLoading: isValidating };
}
