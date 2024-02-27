import { apiVersion, dataset, mode, projectId, token } from "@/lib/env.api";
import {
  createClient,
  type ClientConfig,
  type QueryParams,
} from "@sanity/client";
import "server-only";

const config: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: mode === "development" ? true : false,
  ignoreBrowserTokenWarning: true,
  token,
  perspective: "published",
};

const client = createClient(config);

export async function sanityFetch<QueryResponse>({
  query,
  qParams = {},
  tags,
}: {
  query: string;
  qParams?: QueryParams
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    cache: mode === "development" ? "no-store" : "force-cache",
    next: { tags },
  });
}
