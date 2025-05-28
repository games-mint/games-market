CREATE TYPE "public"."deal_status" AS ENUM('started', 'user_paid', 'completed');--> statement-breakpoint
CREATE TABLE "deals" (
	"id" serial PRIMARY KEY NOT NULL,
	"seller_id" uuid,
	"buyer_id" uuid,
	"product_id" integer NOT NULL,
	"status" "deal_status" NOT NULL,
	"result" text
);
--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "product_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "category" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "deals" ADD CONSTRAINT "deals_seller_id_profiles_id_fk" FOREIGN KEY ("seller_id") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "deals" ADD CONSTRAINT "deals_buyer_id_profiles_id_fk" FOREIGN KEY ("buyer_id") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "deals" ADD CONSTRAINT "deals_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;