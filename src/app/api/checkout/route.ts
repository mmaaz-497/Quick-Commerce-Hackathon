import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-01-27.acacia",
});

export async function POST(req: Request) {
    try {
        const { products } = await req.json();

        if (!products || !Array.isArray(products) || products.length === 0) {
            return NextResponse.json({ error: "Invalid product data" }, { status: 400 });
        }

        const line_items = products.map((product) => ({
            price_data: {
                currency: "usd",
                product_data: { name: product.name },
                unit_amount: Math.round(product.originalPrice * 100),
            },
            quantity: product.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items,
            mode: "payment",
            success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
        });

        return NextResponse.json({ url: session.url });
    } catch (error: any) {
        console.error("Stripe Error:", error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}