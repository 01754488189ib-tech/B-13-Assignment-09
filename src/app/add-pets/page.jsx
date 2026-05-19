"use client";

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, ListBoxItem } from "@heroui/react";
import { FaPaw, FaArrowRight } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

const AddPetsPage = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const userEmail = "123alarafat@gmail.com";

    const { register, handleSubmit, control, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        setLoading(true);

        const petData = {
            ...data,
            adoptionFee: Number(data.adoptionFee),
            ownerEmail: userEmail,
            createdAt: new Date()
        };

        try {
            const response = await fetch('https://your-api-url.com/api/pets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(petData),
            });

            if (response.ok) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Pet listing created successfully.',
                    icon: 'success',
                    background: '#0f172a',
                    color: '#fff',
                    confirmButtonColor: '#FF9505'
                });
                reset();
                router.push('/dashboard/my-listings');
            } else {
                throw new Error('Failed to create listing');
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error.message || 'Something went wrong while storing data.',
                icon: 'error',
                background: '#0f172a',
                color: '#fff',
                confirmButtonColor: '#FF9505'
            });
        } finally {
            setLoading(false);
        }
    };

    const itemClasses = "rounded-lg px-3 py-2 text-slate-300 cursor-pointer data-[hovered=true]:bg-[#FF9505]/10 hover:bg-[#FF9505]/10 outline-none";

    return (
        <div className="w-full max-w-4xl mx-auto p-6 md:p-12 my-10 bg-gradient-to-br from-[#1e293b]/80 via-[#0f172a] to-[#1e293b]/40 rounded-3xl shadow-2xl relative overflow-hidden border border-slate-800">            

            <div className="mb-10 text-center md:text-left relative z-10">
                <span className="text-[#FF9505] text-xs font-bold uppercase tracking-widest bg-[#FF9505]/10 px-4 py-1.5 rounded-full inline-block mb-4">
                    + Find Their Forever Family
                </span>
                <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                    Add a New <span className="text-[#FF9505]">Pet Listing</span>
                </h1>
                <p className="text-slate-400 text-sm md:text-base mt-2 max-w-xl">
                    Help a pet find their forever home by creating a detailed listing.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">

                <div className="flex items-center gap-3 text-white font-bold border-b border-slate-800 pb-4 text-sm uppercase tracking-wider">
                    <div className="w-8 h-8 rounded-lg bg-[#FF9505]/10 text-[#FF9505] flex items-center justify-center text-sm">
                        <FaPaw />
                    </div>
                    <span>Pet Information</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

                    <div className="md:col-span-2">
                        <TextField isRequired validationState={errors.petName ? "invalid" : "valid"}>
                            <Label className="text-slate-300 font-semibold text-sm mb-2 block">Pet Name</Label>
                            <Input
                                {...register("petName", { required: "Pet name is required" })}
                                placeholder="e.g., Chantale Rodriguez"
                                className="rounded-xl text-white bg-[#0f172a] border-slate-700/50"
                            />
                            {errors.petName && <FieldError className="text-rose-500 text-xs mt-1">{errors.petName.message}</FieldError>}
                        </TextField>
                    </div>
                    <div>
                        <Label className="text-slate-300 font-semibold text-sm mb-2 block">Species</Label>
                        <Controller
                            name="species"
                            control={control}
                            rules={{ required: "Species is required" }}
                            render={({ field }) => (
                                <Select
                                    isRequired
                                    className="w-full"
                                    placeholder="Select Species"
                                    selectedKey={field.value}
                                    onSelectionChange={(key) => field.onChange(key)}
                                    validationState={errors.species ? "invalid" : "valid"}
                                >
                                    <Select.Trigger className="rounded-xl border-2 border-slate-800 bg-transparent text-slate-200 h-12 px-3 transition-colors hover:border-[#FF9505]/40 data-[pressed=true]:border-[#FF9505]">
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover className="bg-[#0f172a] border border-slate-800 rounded-xl shadow-2xl">
                                        <ListBox className="text-slate-200 p-1">
                                            <ListBoxItem id="Dog" textValue="Dog" className={itemClasses}>Dog</ListBoxItem>
                                            <ListBoxItem id="Cat" textValue="Cat" className={itemClasses}>Cat</ListBoxItem>
                                            <ListBoxItem id="Bird" textValue="Bird" className={itemClasses}>Bird</ListBoxItem>
                                            <ListBoxItem id="Rabbit" textValue="Rabbit" className={itemClasses}>Rabbit</ListBoxItem>
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            )}
                        />
                        {errors.species && <p className="text-rose-500 text-xs mt-1">{errors.species.message}</p>}
                    </div>

                    <TextField isRequired validationState={errors.breed ? "invalid" : "valid"}>
                        <Label className="text-slate-300 font-semibold text-sm mb-2 block">Breed</Label>
                        <Input
                            {...register("breed", { required: "Breed is required" })}
                            placeholder="e.g., Husky / Local"
                            className="rounded-xl text-white bg-[#0f172a]"
                        />
                        {errors.breed && <FieldError className="text-rose-500 text-xs mt-1">{errors.breed.message}</FieldError>}
                    </TextField>

                    <TextField isRequired validationState={errors.age ? "invalid" : "valid"}>
                        <Label className="text-slate-300 font-semibold text-sm mb-2 block">Age (years/months)</Label>
                        <Input
                            {...register("age", { required: "Age is required" })}
                            placeholder="e.g., 2 years"
                            className="rounded-xl text-white bg-[#0f172a]"
                        />
                        {errors.age && <FieldError className="text-rose-500 text-xs mt-1">{errors.age.message}</FieldError>}
                    </TextField>

                    <div>
                        <Label className="text-slate-300 font-semibold text-sm mb-2 block">Gender</Label>
                        <Controller
                            name="gender"
                            control={control}
                            rules={{ required: "Gender is required" }}
                            render={({ field }) => (
                                <Select
                                    isRequired
                                    className="w-full"
                                    placeholder="Select Gender"
                                    selectedKey={field.value}
                                    onSelectionChange={(key) => field.onChange(key)}
                                    validationState={errors.gender ? "invalid" : "valid"}
                                >
                                    <Select.Trigger className="rounded-xl border-2 border-slate-800 bg-transparent text-slate-200 h-12 px-3 transition-colors hover:border-[#FF9505]/40 data-[pressed=true]:border-[#FF9505]">
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>
                                    <Select.Popover className="bg-[#0f172a] border border-slate-800 rounded-xl shadow-2xl">
                                        <ListBox className="text-slate-200 p-1">
                                            <ListBoxItem id="Male" textValue="Male" className={itemClasses}>Male</ListBoxItem>
                                            <ListBoxItem id="Female" textValue="Female" className={itemClasses}>Female</ListBoxItem>
                                            <ListBoxItem id="Unknown" textValue="Unknown" className={itemClasses}>Unknown</ListBoxItem>
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            )}
                        />
                        {errors.gender && <p className="text-rose-500 text-xs mt-1">{errors.gender.message}</p>}
                    </div>

                    <div className="md:col-span-2">
                        <TextField isRequired validationState={errors.imageUrl ? "invalid" : "valid"}>
                            <Label className="text-slate-300 font-semibold text-sm mb-2 block">Image URL</Label>
                            <Input
                                type="url"
                                {...register("imageUrl", { required: "Image URL is required" })}
                                placeholder="https://i.ibb.co/example.png"
                                className="rounded-xl text-white bg-[#0f172a]"
                            />
                            {errors.imageUrl && <FieldError className="text-rose-500 text-xs mt-1">{errors.imageUrl.message}</FieldError>}
                        </TextField>
                    </div>

                    <TextField isRequired validationState={errors.healthStatus ? "invalid" : "valid"}>
                        <Label className="text-slate-300 font-semibold text-sm mb-2 block">Health Status</Label>
                        <Input
                            {...register("healthStatus", { required: "Health status is required" })}
                            placeholder="e.g., Healthy / Under treatment"
                            className="rounded-xl text-white bg-[#0f172a]"
                        />
                        {errors.healthStatus && <FieldError className="text-rose-500 text-xs mt-1">{errors.healthStatus.message}</FieldError>}
                    </TextField>

                    <TextField isRequired validationState={errors.vaccinationStatus ? "invalid" : "valid"}>
                        <Label className="text-slate-300 font-semibold text-sm mb-2 block">Vaccination Status</Label>
                        <Input
                            {...register("vaccinationStatus", { required: "Vaccination status is required" })}
                            placeholder="e.g., Fully Vaccinated / Not Vaccinated"
                            className="rounded-xl text-white bg-[#0f172a]"
                        />
                        {errors.vaccinationStatus && <FieldError className="text-rose-500 text-xs mt-1">{errors.vaccinationStatus.message}</FieldError>}
                    </TextField>

                    <TextField isRequired validationState={errors.location ? "invalid" : "valid"}>
                        <Label className="text-slate-300 font-semibold text-sm mb-2 block">Location</Label>
                        <Input
                            {...register("location", { required: "Location is required" })}
                            placeholder="e.g., Dhaka, Bangladesh"
                            className="rounded-xl text-white bg-[#0f172a]"
                        />
                        {errors.location && <FieldError className="text-rose-500 text-xs mt-1">{errors.location.message}</FieldError>}
                    </TextField>
                    <TextField isRequired validationState={errors.adoptionFee ? "invalid" : "valid"}>
                        <Label className="text-slate-300 font-semibold text-sm mb-2 block">Adoption Fee ($)</Label>
                        <Input
                            type="number"
                            {...register("adoptionFee", { required: "Adoption fee is required", min: 0 })}
                            placeholder="0"
                            className="rounded-xl text-white bg-[#0f172a]"
                        />
                        {errors.adoptionFee && <FieldError className="text-rose-500 text-xs mt-1">{errors.adoptionFee.message}</FieldError>}
                    </TextField>
                    <div className="md:col-span-2">
                        <TextField isReadOnly value={userEmail}>
                            <Label className="text-slate-300 font-semibold text-sm mb-2 block">Owner Email</Label>
                            <Input className="rounded-xl opacity-50 text-white bg-slate-800/20 cursor-not-allowed" />
                        </TextField>
                    </div>
                    <div className="md:col-span-2">
                        <TextField isRequired validationState={errors.description ? "invalid" : "valid"}>
                            <Label className="text-slate-300 font-semibold text-sm mb-2 block">Description</Label>
                            <TextArea
                                {...register("description", { required: "Description is required" })}
                                placeholder="Write details about the pet behavior, habits..."
                                className="rounded-2xl text-white bg-[#0f172a] min-h-[120px]"
                            />
                            {errors.description && <FieldError className="text-rose-500 text-xs mt-1">{errors.description.message}</FieldError>}
                        </TextField>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-6 border-t border-slate-800">
                    <Button
                        type="button"
                        onClick={() => reset()}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-slate-700 font-semibold text-sm text-slate-300 bg-transparent hover:bg-slate-800 hover:text-white transition-all duration-200"
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full sm:w-auto bg-[#FF9505] text-white px-8 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#ffb74d] active:scale-95 transition-all duration-200 disabled:opacity-50"
                    >
                        {loading ? 'Processing...' : 'Add Pet Listing'}
                        <FaArrowRight className="text-xs" />
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddPetsPage;