import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    tagTypes: ["products", "brands", "models"],
    endpoints: (builder) => ({
        // products
        getProduct: builder.query({
            query: () => "/products",
            providesTags: ["products"],
        }),
        addProduct: builder.mutation({
            query: (payload) => ({
                url: "/products",
                method: "POST",
                body: payload
            }),
            invalidatesTags: ["products"],
        }),
        upDateProduct: builder.mutation({
            query: (payload) => ({
                url: `/products/${payload.id}`,
                method: "PUT",
                body: payload
            }),
            invalidatesTags: ["products"],
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
                body: id
            }),
            invalidatesTags: ["products"],
        }),

        // brands
        getBrands: builder.query({
            query: () => "/brands",
            providesTags: ["brands"],
        }),
        addBrand: builder.mutation({
            query: (payload) => ({
                url: "/brands",
                method: "POST",
                body: payload
            }),
            invalidatesTags: ["brands"]
        }),
        upDateBrand: builder.mutation({
            query: (payload) => ({
                url: `brands/${payload.id}`,
                method: "PUT",
                body: payload
            }),
            invalidatesTags: ["brands"]
        }),
        deleteBrand: builder.mutation({
            query: (id) => ({
                url: `/brands/${id}`,
                method: "DELETE",
                body: id
            }),
            invalidatesTags: ["brands"]
        }),

        // models   
        getModels: builder.query({
            query: () => "/models",
            providesTags: ["models"],
        }),
        addModels: builder.mutation({
            query: (payload) => ({
                url: `/models`,
                method: 'POST',
                body: payload
            }),
            invalidatesTags: ["models"]
        }),
        upDateModels: builder.mutation({
            query: (payload) => ({
                url: `/models/${payload.id}`,
                method: "PUT",
                body: payload
            }),
            invalidatesTags: ["models"]
        }),
        deleteModels: builder.mutation({
            query: (id) => ({
                url: `/models/${id}`,
                method: "DELETE",
                body: id
            }),
            invalidatesTags: ["models"]
        })


    }),
})
export const { useGetProductQuery, useAddProductMutation, useDeleteProductMutation, useUpDateProductMutation, useGetBrandsQuery, useAddBrandMutation, useDeleteBrandMutation, useUpDateBrandMutation, useGetModelsQuery, useAddModelsMutation, useUpDateModelsMutation, useDeleteModelsMutation } = api
export default api