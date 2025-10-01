"use client";

import React from "react";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Reservation() {
  return (
    <div>
      <Navbar />
      <div className="mt-24">

        <form className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md space-y-4">
          <div className="flex gap-4">

            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-2"> Nom </label>
              <input type="text" className="w-full border rounded-md p-2" />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-2"> Prénom </label>
              <input type="text" className="w-full border rounded-md p-2" />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Type de chambre
            </label>
            <select className="w-full border rounded-md p-2">
              <option value="simple">Simple</option>
              <option value="double">Double</option>
              <option value="suite">Suite</option>
              <option value="familiale">Familiale</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2"> Nombre de personnes </label>
            <input
              type="number"
              min="1"
              className="w-full border rounded-md p-2"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-2"> Nombre d'adultes </label>
              <input
                type="number"
                min="1"
                className="w-full border rounded-md p-2"
              />
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 font-semibold mb-2"> Nombre d'enfants </label>
              <input
                type="number"
                min="0"
                className="w-full border rounded-md p-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2"> Date d'arrivée </label>
            <input type="date" className="w-full border rounded-md p-2" />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2"> Date de départ </label>
            <input type="date" className="w-full border rounded-md p-2" />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-700 transition"
          >
            Réserver
          </button>
        </form>

      </div>
      <Footer />
    </div>
  );
}
